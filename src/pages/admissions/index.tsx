import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import UploadFileIcon from "@mui/icons-material/UploadFile";

import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Collapse,
  Alert,
} from "@mui/material";
import Navbar from "../../components/Navbar";

const admissionConditions = [
"Être diplômé(e) d’un institut ou école de santé reconnue",
"Avoir terminé son stage académique",
"Être motivé(e) à intégrer le monde professionnel",
];

const procedureSteps = [
"Remplir le formulaire de candidature",
"Entretien individuel (présentiel ou téléphonique)",
"Paiement des frais d’inscription",
"Intégration dans le programme",
];

const requiredDocuments = [
{ label: "Copie du diplôme ou attestation", icon: <SchoolIcon /> },
{ label: "Pièce d’identité", icon: <PersonIcon /> },
{ label: "CV à jour", icon: <DescriptionIcon /> },
{ label: "Lettre de motivation (facultatif)", icon: <AssignmentTurnedInIcon /> },
];

const Admissions: React.FC = () => {
const [activeStep, setActiveStep] = useState(0);
const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    diploma: null as File | null,
    id: null as File | null,
    cv: null as File | null,
    motivation: null as File | null,
    agree: false,
});
const [submitted, setSubmitted] = useState(false);

const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
    setForm({ ...form, [e.target.name]: e.target.value });
};

const handleFileChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
        setForm({ ...form, [name]: e.target.files[0] });
    }
};

const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, agree: e.target.checked });
};

const handleNext = () => {
    if (activeStep === 0 && (!form.name || !form.email || !form.phone || !form.diploma || !form.id || !form.cv || !form.agree)) {
        return;
    }
    if (activeStep < procedureSteps.length - 1) {
        setActiveStep((prev) => prev + 1);
    } else {
        setSubmitted(true);
    }
};

const handleBack = () => {
    setActiveStep((prev) => prev - 1);
};

return (
    <>
    <Navbar />
    <Box maxWidth="md" mx="auto" py={4}>
        <Typography variant="h3" fontWeight={700} marginTop={8} gutterBottom>
            Admissions
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
            🎯 Objectif : Informer clairement sur les conditions d’admission, la procédure à suivre et les documents nécessaires.
        </Typography>

        <Paper elevation={2} sx={{ p: 3, my: 3 }}>
            <Typography variant="h6" gutterBottom>
                Pourquoi rejoindre le Cabinet ?
            </Typography>
            <Typography>
                Nous offrons un accompagnement personnalisé pour vous aider à transformer votre diplôme en une véritable carrière.
            </Typography>
        </Paper>

        <Paper elevation={1} sx={{ p: 2, mb: 2 }}>
            <Typography variant="h6">Conditions d’admission :</Typography>
            <List>
                {admissionConditions.map((cond, idx) => (
                    <ListItem key={idx}>
                        <ListItemIcon>
                            <CheckCircleIcon color="success" />
                        </ListItemIcon>
                        <ListItemText primary={cond} />
                    </ListItem>
                ))}
            </List>
        </Paper>

        <Paper elevation={1} sx={{ p: 2, mb: 2 }}>
            <Typography variant="h6">Procédure :</Typography>
            <Stepper activeStep={activeStep} alternativeLabel>
                {procedureSteps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <Box mt={2}>
                {activeStep === 0 && (
                    <Box component="form" noValidate autoComplete="off">
                        <Typography variant="subtitle1" gutterBottom>
                            Formulaire de candidature
                        </Typography>
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Nom complet"
                            name="name"
                            value={form.name}
                            onChange={handleInputChange}
                            required
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Email"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleInputChange}
                            required
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Téléphone"
                            name="phone"
                            value={form.phone}
                            onChange={handleInputChange}
                            required
                        />
                        <Box mt={2}>
                            <Typography variant="subtitle2">Documents requis :</Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <SchoolIcon />
                                    </ListItemIcon>
                                    <Button
                                        variant="outlined"
                                        component="label"
                                        startIcon={<UploadFileIcon />}
                                    >
                                        Télécharger diplôme/attestation *
                                        <input
                                            type="file"
                                            hidden
                                            accept=".pdf,.jpg,.png"
                                            onChange={handleFileChange("diploma")}
                                        />
                                    </Button>
                                    <Typography variant="body2" ml={2}>
                                        {form.diploma ? form.diploma.name : ""}
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <PersonIcon />
                                    </ListItemIcon>
                                    <Button
                                        variant="outlined"
                                        component="label"
                                        startIcon={<UploadFileIcon />}
                                    >
                                        Télécharger pièce d'identité *
                                        <input
                                            type="file"
                                            hidden
                                            accept=".pdf,.jpg,.png"
                                            onChange={handleFileChange("id")}
                                        />
                                    </Button>
                                    <Typography variant="body2" ml={2}>
                                        {form.id ? form.id.name : ""}
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <DescriptionIcon />
                                    </ListItemIcon>
                                    <Button
                                        variant="outlined"
                                        component="label"
                                        startIcon={<UploadFileIcon />}
                                    >
                                        Télécharger CV *
                                        <input
                                            type="file"
                                            hidden
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleFileChange("cv")}
                                        />
                                    </Button>
                                    <Typography variant="body2" ml={2}>
                                        {form.cv ? form.cv.name : ""}
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <AssignmentTurnedInIcon />
                                    </ListItemIcon>
                                    <Button
                                        variant="outlined"
                                        component="label"
                                        startIcon={<UploadFileIcon />}
                                    >
                                        Télécharger lettre de motivation (facultatif)
                                        <input
                                            type="file"
                                            hidden
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleFileChange("motivation")}
                                        />
                                    </Button>
                                    <Typography variant="body2" ml={2}>
                                        {form.motivation ? form.motivation.name : ""}
                                    </Typography>
                                </ListItem>
                            </List>
                        </Box>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={form.agree}
                                    onChange={handleCheckboxChange}
                                    name="agree"
                                />
                            }
                            label="Je certifie que les informations fournies sont exactes."
                        />
                    </Box>
                )}
                {activeStep === 1 && (
                    <Box>
                        <Typography>
                            Un membre de notre équipe vous contactera pour convenir d’un entretien individuel (présentiel ou téléphonique).
                        </Typography>
                    </Box>
                )}
                {activeStep === 2 && (
                    <Box>
                        <Typography>
                            Après validation de votre entretien, vous recevrez les instructions pour le paiement des frais d’inscription.
                        </Typography>
                    </Box>
                )}
                {activeStep === 3 && (
                    <Box>
                        <Typography>
                            Félicitations ! Vous êtes prêt(e) à intégrer notre programme et à débuter votre carrière professionnelle.
                        </Typography>
                    </Box>
                )}
            </Box>
            <Box mt={2} display="flex" justifyContent="space-between">
                <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    variant="outlined"
                >
                    Précédent
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    disabled={
                        activeStep === 0 &&
                        (!form.name ||
                            !form.email ||
                            !form.phone ||
                            !form.diploma ||
                            !form.id ||
                            !form.cv ||
                            !form.agree)
                    }
                >
                    {activeStep === procedureSteps.length - 1 ? "Terminer" : "Suivant"}
                </Button>
            </Box>
            <Collapse in={submitted}>
                <Alert severity="success" sx={{ mt: 3 }}>
                    Votre candidature a été soumise avec succès ! Nous vous contacterons prochainement.
                </Alert>
            </Collapse>
        </Paper>

        <Paper elevation={1} sx={{ p: 2 }}>
            <Typography variant="h6">Documents requis :</Typography>
            <List>
                {requiredDocuments.map((doc, idx) => (
                    <ListItem key={idx}>
                        <ListItemIcon>{doc.icon}</ListItemIcon>
                        <ListItemText primary={doc.label} />
                    </ListItem>
                ))}
            </List>
        </Paper>
    </Box>
    </>
);
};

export default Admissions;