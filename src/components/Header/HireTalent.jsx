import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./HireTalent.module.css";
import Footer from "../Footer/footer";
import Header from "./header";

const HireTalent = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchFreelancers = async () => {
            try {
                // Fetch all users from your backend API
                const response = await axios.get(
                    "http://localhost:3500/api/users"
                );
                if (response.data.success) {
                    // Filter out only those users with the profile "freelancer"
                    const freelancers = response.data.users.filter(
                        (user) => user.profile === "freelancer"
                    );
                    setEmployees(freelancers);
                } else {
                    console.error("Failed to fetch users");
                }
            } catch (error) {
                console.error("Error fetching freelancers:", error);
            }
        };

        fetchFreelancers();
    }, []);

    return (
        <>
            <Header />
            <br />
            <br />
            <div className={styles.hireTalentPage}>
                <p className="logo-header">Hire Top Talent</p>
                <p>
                    Find the best freelancers and professionals for your
                    projects.
                </p>

                <section className={styles.section}>
                    <p className="logo-header">Our Verified Talents</p>
                    <div className={styles.profilesGrid}>
                        {employees.map((employee) => (
                            <div
                                key={employee._id}
                                className={styles.profileCard}
                            >
                                <div className={styles.cardContent}>
                                    {employee.image && (
                                        <img
                                            src={employee.image}
                                            alt={`${employee.firstname} ${employee.lastname}`}
                                            className={styles.profileImage}
                                        />
                                    )}
                                    <div className={styles.profileDetails}>
                                        <h3 style={{ textAlign: "center" }}>
                                            {employee.firstname}{" "}
                                            {employee.lastname}
                                        </h3>
                                        <p>{employee.email}</p>
                                        <p>
                                            Skills:{" "}
                                            {employee.skillsData &&
                                            employee.skillsData.skills
                                                ? employee.skillsData.skills
                                                : "N/A"}
                                        </p>
                                        <p>
                                            {employee.skillsData &&
                                            employee.skillsData.overview
                                                ? employee.skillsData.overview
                                                : ""}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <br />
            <br />
            <br />
            <Footer />
        </>
    );
};

export default HireTalent;
