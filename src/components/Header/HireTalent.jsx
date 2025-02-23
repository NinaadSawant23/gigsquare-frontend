import React from 'react';
import styles from './HireTalent.module.css';

const HireTalent = () => {
  const employees = [
    {
      id: 1,
      firstName: 'John',
      surname: 'Doe',
      email: 'john.doe@example.com',
      skills: ['JavaScript', 'React', 'Node.js'],
      overview: 'Experienced full-stack developer with a passion for building web applications.',
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
    },
    {
      id: 2,
      firstName: 'Jane',
      surname: 'Smith',
      email: 'jane.smith@example.com',
      skills: ['Graphic Design', 'UI/UX', 'Adobe Creative Suite'],
      overview: 'Creative graphic designer with expertise in user interface and user experience design.',
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
    },
    {
      id: 3,
      firstName: 'John',
      surname: 'Doe',
      email: 'john.doe@example.com',
      skills: ['JavaScript', 'React', 'Node.js'],
      overview: 'Experienced full-stack developer with a passion for building web applications.',
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
    },
    {
      id: 4,
      firstName: 'Jane',
      surname: 'Smith',
      email: 'jane.smith@example.com',
      skills: ['Graphic Design', 'UI/UX', 'Adobe Creative Suite'],
      overview: 'Creative graphic designer with expertise in user interface and user experience design.',
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
    },
    {
      id: 5,
      firstName: 'John',
      surname: 'Doe',
      email: 'john.doe@example.com',
      skills: ['JavaScript', 'React', 'Node.js'],
      overview: 'Experienced full-stack developer with a passion for building web applications.',
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
    },
    {
      id: 6,
      firstName: 'Jane',
      surname: 'Smith',
      email: 'jane.smith@example.com',
      skills: ['Graphic Design', 'UI/UX', 'Adobe Creative Suite'],
      overview: 'Creative graphic designer with expertise in user interface and user experience design.',
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
    },
    // Add more dummy employee data as needed
  ];

  return (
    <div className={styles.hireTalentPage}>
      <h1>Hire Top Talent</h1>
      <p>Find the best freelancers and professionals for your projects.</p>

      

      <section className={styles.section}>
        <h2>Our Talent</h2>
        <div className={styles.profilesGrid}>
          {employees.map((employee) => (
            <div key={employee.id} className={styles.profileCard}>
              <div className={styles.cardContent}>
                {employee.image && <img src={employee.image} alt={`${employee.firstName} ${employee.surname}`} className={styles.profileImage} />}
                <div className={styles.profileDetails}>
                  <h3>{employee.firstName} {employee.surname}</h3>
                  <p>{employee.email}</p>
                  <p>Skills: {employee.skills.join(', ')}</p>
                  <p>{employee.overview}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <button className={styles.browseButton}>Browse Talent</button>
    </div>
  );
};

export default HireTalent;