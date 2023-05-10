import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import emailjs from 'emailjs-com';
import styles from '../styles/Contact.module.css';

type FormValues = {
  user_name: string;
  user_email: string;
  message: string;
};

export const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = (data: FormValues) => {
    /*
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data, 'YOUR_USER_ID')
      .then(() => alert('Message sent!'))
      .catch(err => console.error(err));

    setIsModalOpen(false);
    */
  };

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Contact Me</button>
      {isModalOpen && (
        <div className={styles.modal}>
        <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>X</button>
          <div className={styles.left}>
            <h1>Contact Me</h1>
            <p>Your contact information</p>
            {/* Add your personal links here */}
          </div>
          <div className={styles.right}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.inputGroup}>
                    <input
                    {...register("user_name", { required: true })}
                    placeholder="Your Name"
                    />
                    {errors.user_name && <span>This field is required</span>}

                    <input
                    {...register("user_email", { required: true })}
                    placeholder="Your Email"
                    />
                    {errors.user_email && <span>This field is required</span>}
                </div>

                <textarea
                    {...register("message", { required: true })}
                    placeholder="Your Message"
                />
                {errors.message && <span>This field is required</span>}

                <button type="submit">Send</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};


