import React, { useState } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBRadio,
    MDBInput,
    MDBTextArea,
    MDBBtn,
    MDBValidation,
    MDBValidationItem,
} from "mdb-react-ui-kit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SkillForm() {
    const navivgate = useNavigate();

    const [formData, setFormData] = useState({
        skillLevel: "",
        skills: "",
        overview: "",
        languages: "",
        contact: "",
        address: "",
        hourlyRate: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        console.log("Token from localStorage:", token);
        const {
            skillLevel,
            skills,
            overview,
            languages,
            contact,
            address,
            hourlyRate,
        } = formData;

        if (
            !skillLevel ||
            !skills ||
            !overview ||
            !languages ||
            !contact ||
            !address ||
            !hourlyRate
        ) {
            alert("Please fill in all fields.");
            return;
        }

        // Retrieve token from localStorage (or wherever you store it)

        try {
            const response = await axios.post(
                "http://localhost:3500/api/update-skills", // API endpoint
                {
                    skillLevel,
                    skills,
                    overview,
                    languages,
                    contact,
                    address,
                    hourlyRate,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.status === 200) {
                alert("Skills updated successfully!");
                navivgate("/home");
                // Optionally reset the form or perform further actions
            }
        } catch (error) {
            console.error("Error updating skills:", error);
            alert("Failed to update skills");
        }
    };

    return (
        <>
            <Header />
            <MDBContainer className="d-flex justify-content-center align-items-center vh-100 bg-light">
                <MDBCard
                    style={{
                        maxWidth: "600px",
                        width: "100%",
                        padding: "20px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        borderRadius: "12px",
                    }}
                >
                    <MDBCardBody>
                        <p className="logo-header">Professional Skill Form</p>
                        <MDBValidation onSubmit={handleSubmit} noValidate>
                            {/* Skill Level */}
                            <MDBValidationItem
                                feedback="Please select your skill level."
                                invalid
                            >
                                <label className="mb-2 fw-bold">
                                    What level are you?
                                </label>
                                <div className="mb-3">
                                    <MDBRadio
                                        name="skillLevel"
                                        id="beginner"
                                        label="Beginner"
                                        value="Beginner"
                                        onChange={handleChange}
                                        inline
                                        required
                                    />
                                    <MDBRadio
                                        name="skillLevel"
                                        id="professional"
                                        label="Professional"
                                        value="Professional"
                                        onChange={handleChange}
                                        inline
                                        required
                                    />
                                    <MDBRadio
                                        name="skillLevel"
                                        id="expert"
                                        label="Expert"
                                        value="Expert"
                                        onChange={handleChange}
                                        inline
                                        required
                                    />
                                </div>
                            </MDBValidationItem>

                            {/* Skills & Proficiency */}
                            <MDBValidationItem
                                feedback="Please enter your skills and proficiency."
                                invalid
                            >
                                <MDBInput
                                    label="Skills & Proficiency"
                                    name="skills"
                                    value={formData.skills}
                                    onChange={handleChange}
                                    required
                                    className="mb-3"
                                />
                            </MDBValidationItem>

                            {/* Brief Overview */}
                            <MDBValidationItem
                                feedback="Please provide a brief overview."
                                invalid
                            >
                                <MDBTextArea
                                    label="Brief Overview"
                                    name="overview"
                                    value={formData.overview}
                                    onChange={handleChange}
                                    required
                                    className="mb-3"
                                    rows={3}
                                />
                            </MDBValidationItem>

                            {/* Languages Known */}
                            <MDBValidationItem
                                feedback="Please list the languages you know."
                                invalid
                            >
                                <MDBInput
                                    label="Languages You Know"
                                    name="languages"
                                    value={formData.languages}
                                    onChange={handleChange}
                                    required
                                    className="mb-4"
                                />
                            </MDBValidationItem>

                            {/* Contact Details */}
                            <MDBValidationItem
                                feedback="Please provide your contact details."
                                invalid
                            >
                                <MDBInput
                                    label="Contact Details"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    required
                                    className="mb-4"
                                />
                            </MDBValidationItem>

                            {/* Address */}
                            <MDBValidationItem
                                feedback="Please provide your address."
                                invalid
                            >
                                <MDBTextArea
                                    label="Address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                    className="mb-4"
                                    rows={2}
                                />
                            </MDBValidationItem>

                            {/* Hourly Rate */}
                            <MDBValidationItem
                                feedback="Please provide your hourly rate."
                                invalid
                            >
                                <MDBInput
                                    label="Hourly Rate"
                                    name="hourlyRate"
                                    type="number"
                                    value={formData.hourlyRate}
                                    onChange={handleChange}
                                    required
                                    className="mb-4"
                                />
                            </MDBValidationItem>
                            <br />
                            {/* Submit Button */}
                            <MDBBtn type="submit" color="primary" block>
                                Submit
                            </MDBBtn>
                        </MDBValidation>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
            <Footer />
        </>
    );
}
