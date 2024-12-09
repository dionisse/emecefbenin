const axios = require("axios");
require("dotenv").config();

/**
 * Vérifie le statut de l'API.
 * Cette fonction envoie une requête GET pour vérifier si l'API de facturation est opérationnelle.
 */
const getApiStatus = async (req, res) => {
    try {
        const response = await axios.get(process.env.API_FACTURATION_URL_TEST, {
            headers: {
                Authorization: `Bearer ${process.env.API_KEY_TOKEN}`,
            },
        });

        // Vérifie si la réponse contient le statut attendu
        if (response.status === 200 && response.data.status) {
            return res.status(200).json(response.data);
        } else {
            return res.status(500).json({ status: false, message: "API non disponible." });
        }
    } catch (error) {
        console.error("Erreur lors de la vérification du statut de l'API :", error.message);
        res.status(500).json({
            status: false,
            message: "Une erreur s'est produite lors de la récupération du statut de l'API.",
        });
    }
};

/**
 * Demande la génération d'une facture.
 * Envoie une requête POST avec les données nécessaires à l'API de facturation.
 */
const askInvoice = async (req, res) => {
    try {
        const { invoiceRequestData } = req.body;

        // Vérifie si les données nécessaires sont présentes
        if (!invoiceRequestData) {
            return res.status(400).json({
                message: "Vous devez fournir les détails de la facture.",
            });
        }

        const response = await axios.post(process.env.API_FACTURATION_URL_TEST, invoiceRequestData, {
            headers: {
                Authorization: `Bearer ${process.env.API_KEY_TOKEN}`,
            },
        });

        // Renvoie la réponse si la facture est générée avec succès
        if (response.status === 200) {
            return res.status(200).json(response.data);
        } else {
            return res.status(500).json({ status: false, message: "La demande de facture a échoué." });
        }
    } catch (error) {
        console.error("Erreur lors de la demande de facture :", error.message);
        res.status(500).json({
            status: false,
            message: "Une erreur s'est produite lors de la demande de facture.",
        });
    }
};

/**
 * Confirme une facture.
 * Cette fonction envoie une requête PUT pour confirmer une facture existante.
 */
const confirmInvoice = async (req, res) => {
    try {
        const { uid } = req.params;

        const response = await axios.put(
            `${process.env.API_FACTURATION_URL_TEST}/${uid}/confirm`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${process.env.API_KEY_TOKEN}`,
                },
            }
        );

        if (response.status === 200) {
            return res.status(200).json(response.data);
        } else {
            return res.status(500).json({ status: false, message: "Confirmation de la facture échouée." });
        }
    } catch (error) {
        console.error("Erreur lors de la confirmation de facture :", error.message);
        res.status(500).json({
            status: false,
            message: "Une erreur s'est produite lors de la confirmation de la facture.",
        });
    }
};

/**
 * Annule une facture.
 * Envoie une requête PUT pour annuler une facture existante.
 */
const resetInvoice = async (req, res) => {
    try {
        const { uid } = req.params;

        const response = await axios.put(
            `${process.env.API_FACTURATION_URL_TEST}/${uid}/cancel`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${process.env.API_KEY_TOKEN}`,
                },
            }
        );

        if (response.status === 200) {
            return res.status(200).json(response.data);
        } else {
            return res.status(500).json({ status: false, message: "Annulation de la facture échouée." });
        }
    } catch (error) {
        console.error("Erreur lors de l'annulation de la facture :", error.message);
        res.status(500).json({
            status: false,
            message: "Une erreur s'est produite lors de l'annulation de la facture.",
        });
    }
};

/**
 * Récupère le statut d'une facture spécifique.
 * Cette fonction envoie une requête GET pour obtenir les détails d'une facture.
 */
const getInvoiceStatus = async (req, res) => {
    try {
        const { uid } = req.params;

        const response = await axios.get(`${process.env.API_FACTURATION_URL_TEST}/${uid}`, {
            headers: {
                Authorization: `Bearer ${process.env.API_KEY_TOKEN}`,
            },
        });

        if (response.status === 200) {
            return res.status(200).json(response.data);
        } else {
            return res.status(500).json({ status: false, message: "Impossible de récupérer le statut de la facture." });
        }
    } catch (error) {
        console.error("Erreur lors de la récupération du statut de la facture :", error.message);
        res.status(500).json({
            status: false,
            message: "Une erreur s'est produite lors de la récupération du statut de la facture.",
        });
    }
};

module.exports = {
    getApiStatus,
    askInvoice,
    confirmInvoice,
    resetInvoice,
    getInvoiceStatus,
};
