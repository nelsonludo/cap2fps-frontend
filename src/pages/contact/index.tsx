import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Fade,
  Snackbar,
  Alert,
} from "@mui/material";
import Navbar from "../../components/Navbar";

const CONTACT_INFO = {
address: "Nkoabang, Yaoundé, Cameroun",
phone: "+237 699 123 456",
email: "contact@cabinetpostformation.cm",
};

const GOOGLE_MAPS_EMBED =
"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.759697174996!2d11.61743931475336!3d3.900098497099254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7e8e7a69b7%3A0x2e8e7b7e8e7a69b7!2sNkoabang%2C%20Yaound%C3%A9%2C%20Cameroun!5e0!3m2!1sfr!2scm!4v1710000000000!5m2!1sfr!2scm";

const initialForm = {
name: "",
email: "",
subject: "",
message: "",
};

const validateEmail = (email: string) =>
/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const ContactPage: React.FC = () => {
const [form, setForm] = useState(initialForm);
const [errors, setErrors] = useState<{ [k: string]: string }>({});
const [submitting, setSubmitting] = useState(false);
const [success, setSuccess] = useState(false);

const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
};

const validate = () => {
    const newErrors: { [k: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Le nom est requis.";
    if (!form.email.trim()) newErrors.email = "L'email est requis.";
    else if (!validateEmail(form.email))
        newErrors.email = "Email invalide.";
    if (!form.subject.trim()) newErrors.subject = "Le sujet est requis.";
    if (!form.message.trim()) newErrors.message = "Le message est requis.";
    return newErrors;
};

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length) {
        setErrors(newErrors);
        return;
    }
    setSubmitting(true);
    // Simulate API call
    setTimeout(() => {
        setSubmitting(false);
        setSuccess(true);
        setForm(initialForm);
    }, 1200);
};

return (
    <>
    <Navbar />
    <Fade in>
        <Container maxWidth="md" sx={{ py: 6 }}>
            <Typography variant="h3" fontWeight={700} marginTop={6} gutterBottom>
                Contactez-nous
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" mb={4}>
                Nous sommes ravis de répondre à vos questions ou demandes. Remplissez le formulaire ou utilisez les coordonnées ci-dessous.
            </Typography>
            <Grid container spacing={4}>
                {/* Contact Info */}
                <Grid item xs={12} md={5}>
                    <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 3 }}>
                        <Box display="flex" alignItems="center" mb={2}>
                            <LocationOnIcon color="primary" sx={{ mr: 1 }} />
                            <Typography>
                                <b>Adresse :</b> {CONTACT_INFO.address}
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mb={2}>
                            <PhoneIcon color="primary" sx={{ mr: 1 }} />
                            <Typography>
                                <b>Téléphone :</b> {CONTACT_INFO.phone}
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <EmailIcon color="primary" sx={{ mr: 1 }} />
                            <Typography>
                                <b>Email :</b> {CONTACT_INFO.email}
                            </Typography>
                        </Box>
                    </Paper>
                    <Paper elevation={3} sx={{ borderRadius: 3, overflow: "hidden" }}>
                        <iframe
                            title="Carte Nkoabang"
                            src={GOOGLE_MAPS_EMBED}
                            width="100%"
                            height="220"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </Paper>
                </Grid>
                {/* Contact Form */}
                <Grid item xs={12} md={7}>
                    <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
                        <form onSubmit={handleSubmit} autoComplete="off">
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Nom"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        fullWidth
                                        error={!!errors.name}
                                        helperText={errors.name}
                                        autoComplete="name"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        label="Email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        fullWidth
                                        error={!!errors.email}
                                        helperText={errors.email}
                                        autoComplete="email"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Sujet"
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        fullWidth
                                        error={!!errors.subject}
                                        helperText={errors.subject}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Message"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        fullWidth
                                        multiline
                                        minRows={4}
                                        error={!!errors.message}
                                        helperText={errors.message}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12} textAlign="right">
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        endIcon={<SendIcon />}
                                        disabled={submitting}
                                        sx={{
                                            px: 4,
                                            py: 1.5,
                                            fontWeight: 600,
                                            fontSize: "1rem",
                                            transition: "transform 0.2s",
                                            "&:hover": { transform: "scale(1.05)" },
                                        }}
                                    >
                                        {submitting ? "Envoi..." : "Envoyer"}
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
            <Snackbar
                open={success}
                autoHideDuration={4000}
                onClose={() => setSuccess(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
                <Alert
                    onClose={() => setSuccess(false)}
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%" }}
                >
                    Votre message a été envoyé avec succès !
                </Alert>
            </Snackbar>
        </Container>
    </Fade>
    </>
);
};

export default ContactPage;