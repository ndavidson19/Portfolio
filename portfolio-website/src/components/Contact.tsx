import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/Contact.module.css';

/* eslint-disable react/no-unescaped-entities */


type Props = {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
};

export const Contact: React.FC<Props> = ({ isModalOpen, setIsModalOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [showEmailInput, setShowEmailInput] = useState(false);

  const handleNextClick = (data: any) => {
    setShowEmailInput(true);
  };

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
    setIsModalOpen(false);
    setShowEmailInput(false); // Reset the form
  };

  return (
    <div
      className={styles.modal}
    >
      <div className={styles.modalContent}>
        <div className={styles.left}>
        <h2>Contact Information</h2>
        <p>ndavidson19@ucla.edu</p>
          <h2>Get in touch</h2>
          <p>
            I'm currently looking for new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className={styles.socialLinks}>
            <a href="
            https://www.linkedin.com/in/nicholasdavidson01/" target="_blank">
              <img src="/linkedin-icon.png" alt="LinkedIn" />
            </a>
            <a href="
            https://www.github.com/ndavidson19" target="_blank">
              <img src="/github-icon.png" alt="GitHub" />
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>
           X
          </button>
          <form onSubmit={handleSubmit(showEmailInput ? onSubmit : handleNextClick)}>
            {!showEmailInput && (
              <>
                <textarea
                  {...register("message", { required: true })}
                  placeholder="Your Message"
                />
                {errors.message && <span>This field is required</span>}
                <button type="submit">Next</button>
              </>
            )}
            {showEmailInput && (
              <>
                <input
                  {...register("email", { required: true })}
                  placeholder="Your Email"
                />
                {errors.email && <span>This field is required</span>}
                <button type="submit">Send</button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
