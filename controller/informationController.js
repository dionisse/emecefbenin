const axios = require("axios");
require("dotenv").config();

/**
 * Récupère le statut de l'API d'information.
 * Vérifie si l'API est opérationnelle.
 */
const getInfoStatus = async (req, res) => {
    try {
        const response = await axios.get(process.env.API_INFORMATION_URL_TEST, {
            headers: {
                Authorization: `Bearer ${process.env.API_KEY_TOKEN}`,
            },
        });

        // Vérifie si la réponse est valide et renvoie les données
        if (response.status === 200) {
            return res.status(200).json(response.data);
        } else {
            return res.status(500).json({ status: false, message: "API non disponible." });
        }
    } catch (error) {
        console.error("Erreur lors de la récupération du statut de l'API :", error.message);
        res.status(500).json({
            status: false,
            message: "Une erreur s'est produite lors de la récupération du statut de l'API.",
        });
    }
};

/**
 * Récupère les informations des groupes de taxes.
 * Cette fonction interroge l'API pour obtenir les données relatives aux taxes.
 */
const getTaxInfo = async (req, res) => {
    try {
        const response = await axios.get(`${process.env.API_INFORMATION_URL_TEST}/taxGroup`, {
            headers: {
                Authorization: `Bearer ${process.env.API_KEY_TOKEN}`,
            },
        });

        // Renvoie les données récupérées si la réponse est valide
        if (response.status === 200) {
            return res.status(200).json(response.data);
        } else {
            return res.status(500).json({ status: false, message: "Impossible de récupérer les informations sur les taxes." });
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des informations sur les taxes :", error.message);
        res.status(500).json({
            status: false,
            message: "Une erreur s'est produite lors de la récupération des informations sur les taxes.",
        });
    }
};

/**
 * Récupère les types de factures.
 * Cette fonction interroge l'API pour obtenir la liste des types de factures disponibles.
 */
const getInvoiceType = async (req, res) => {
    try {
        const response = await axios.get(`${process.env.API_INFORMATION_URL_TEST}/invoiceTypes`, {
            headers: {
                Authorization: `Bearer ${process.env.API_KEY_TOKEN}`,
            },
        });

        // Vérifie et renvoie les données récupérées
        if (response.status === 200) {
            return res.status(200).json(response.data);
        } else {
            return res.status(500).json({ status: false, message: "Impossible de récupérer les types de factures." });
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des types de factures :", error.message);
        res.status(500).json({
            status: false,
            message: "Une erreur s'est produite lors de la récupération des types de factures.",
        });
    }
};

/**
 * Récupère les types de paiement.
 * Cette fonction interroge l'API pour obtenir la liste des méthodes de paiement disponibles.
 */
const getPaymentType = async (req, res) => {
    try {
        const response = await axios.get(`${process.env.API_INFORMATION_URL_TEST}/paymentTypes`, {
            headers: {
                Authorization: `Bearer ${process.env.API_KEY_TOKEN}`,
            },
        });

        // Vérifie et renvoie les données récupérées
        if (response.status === 200) {
            return res.status(200).json(response.data);
        } else {
            return res.status(500).json({ status: false, message: "Impossible de récupérer les types de paiements." });
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des types de paiements :", error.message);
        res.status(500).json({
            status: false,
            message: "Une erreur s'est produite lors de la récupération des types de paiements.",
        });
    }
};

module.exports = {
    getInfoStatus,
    getInvoiceType,
    getPaymentType,
    getTaxInfo,
};
