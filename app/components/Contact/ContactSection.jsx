"use client";
import React from "react";
import GithubIcon from "/public/images/github-icon.svg";
import LinkedinIcon from "/public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from "emailjs-com";
import { Formik, Field, Form } from "formik";
import contactFormSchema from "../../schemas/contactFormSchema";
import css from "./Contact.module.scss";

const initialValue = {
  name: "",
  email: "",
  message: "",
};

const ContactSection = () => {
  const handleSubmit = async (values) => {
    emailjs
      .send(
        "XXX", // email.js server id
        "XXX", // email.js template id
        {
          to_name: "Merve",
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        "XXX" // email.js public key
      )
      .then((response) => {
        alert("Your Email has been sent.");
      })
      .catch((error) => {
        alert("Upps! Your email could not be sent.");
      });
  };

  return (
    <section className={css.contact} id="contact">
      <div>
        <h5 className={css.title}>Let`s Connect</h5>
        <p className={css.description}>
          I`m currently looking for new opportunites, my inbox is always open.
          Whether you have a question or just want to say hi, I`ll try my best
          to get back to you!
        </p>
        <div className={css.socialIcons}>
          <Link href="https://github.com/merveyyildiz">
            <Image src={LinkedinIcon} alt="linkedin-icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/merve-y%C4%B1ld%C4%B1z-sert-6a486913a/">
            <Image src={GithubIcon} alt="github-icon" />
          </Link>
        </div>
      </div>
      <div>
        <Formik
          onSubmit={async (values, { resetForm }) => {
            await handleSubmit(values);
            resetForm();
          }}
          initialValues={initialValue}
          validationSchema={contactFormSchema}
        >
          {({ errors, touched, handleSubmit }) => (
            <Form className={css.form} onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className={css.label} htmlFor="name">
                  Your Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Joe Doe"
                  className={css.field}
                />
                {errors.name && touched.name ? (
                  <div className={css.error}>{errors.name}</div>
                ) : null}
              </div>
              <div className="mb-6">
                <label className={css.label} htmlFor="email">
                  Your Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="doe@gmail.com"
                  className={css.field}
                />
                {errors.email && touched.email ? (
                  <div className={css.error}>{errors.email}</div>
                ) : null}
              </div>
              <div className="mb-6">
                <label htmlFor="message" className={css.label}>
                  Message
                </label>
                <Field
                  name="message"
                  id="message"
                  className={css.field}
                  placeholder="Let's talk about..."
                />
                {errors.message && touched.message ? (
                  <div className={css.error}>{errors.message}</div>
                ) : null}
              </div>
              <button type="submit" className={css.button}>
                Send Message
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default ContactSection;
