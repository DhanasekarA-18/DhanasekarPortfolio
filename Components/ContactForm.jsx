import { useState, useEffect, useRef } from "react";
import { Formik, Field, Form } from "formik";
import Image from "next/image";
import Link from "next/link";
import * as Yup from "yup";
import { WhyChooseMe } from "./WhyChooseMe";
import { ToastContainer, toast } from "react-toastify";
import styles from "../styles/ContactForm.module.scss";
import "react-toastify/dist/ReactToastify.css";
const ContactForm = () => {
  const [loader, setLoader] = useState(false);
  const formresetRef = useRef();
  const schemavalidation = {
    name: Yup.string().required("Please enter your Name"),
    email: Yup.string().required("Please enter your email address"),
    message: Yup.string().required("Please enter your message"),
  };
  const SubmitFormSchema = Yup.object().shape(schemavalidation);
  useEffect(() => {
    setTimeout(() => {
      if (loader) setLoader(!loader);
    }, 5000);
  }, [loader]);
  return (
    <>
      <div className={styles.contactMeContainer}>
        <div className={styles.contactTitle}>
          <p>Contact Me</p>
          <WhyChooseMe title="Get In Touch" />
          <div className={styles.contactDetails}>
            <div>
              <Link
                href={"https://www.linkedin.com/in/dhanasekar-a-07a08a1a8/"}
              >
                <Image src="/linkedin.svg" width={32} height={32} />
              </Link>
            </div>
            <div>
              <Link href={"https://www.instagram.com/_d.s.018_/"}>
                <Image src="/instagram.svg" width={32} height={32} />
              </Link>
            </div>
            <div>
              <Link
                href={"https://www.facebook.com/profile.php?id=100035913819054"}
              >
                <Image src="/facebook.svg" width={32} height={32} />
              </Link>
            </div>
            <div style={{ backgroundColor: "white", padding: "0px 2px" }}>
              <Link
                href={
                  "https://api.whatsapp.com/send/?phone=%2B919360678110&text=Hi+Dhanasekar+I+want+to+hire+you+for&type=phone_number&app_absent=0"
                }
              >
                <Image src="/whatsapp.svg" width={32} height={32} />
              </Link>
            </div>
            {/*<div><Link href={"https://www.youtube.com/channel/UC1nofq6mHW4OkMGSg50F3Zg"}><Image  src="/youtube.svg" width={32} height={32}/></Link></div> */}
          </div>
        </div>

        <div className={styles.formContainer}>
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={SubmitFormSchema}
            onSubmit={async (values) => {
              await new Promise((resolve) => setTimeout(resolve, 500));
              setLoader(true);
              if (values) {
                toast.success("Form Submitted Successfully", {
                  position: toast.POSITION.BOTTOM_TOP,
                });
                setTimeout(() => {
                  formresetRef.current.reset();
                }, 5000);
              }
            }}
          >
            {({ errors, touched, setFieldValue, values }) => (
              <Form ref={formresetRef}>
                <div className={styles.formField}>
                  <div>
                    <label>Name</label>
                  </div>
                  <div>
                    <Field
                      name="name"
                      type="text"
                      className={styles.inputContainer}
                    />
                    {errors.name && touched.name ? (
                      <span className={styles.error}> {errors.name}</span>
                    ) : null}
                  </div>
                  <div>
                    <label>Email</label>
                  </div>
                  <div>
                    <Field
                      name="email"
                      type="email"
                      className={styles.inputContainer}
                    />
                    {errors.email && touched.email ? (
                      <span className={styles.error}> {errors.email}</span>
                    ) : null}
                  </div>
                  <div>
                    <label>Message</label>
                  </div>
                  <div>
                    <Field
                      name="message"
                      type="text"
                      className={styles.inputMessage}
                    />
                    {errors.message && touched.message ? (
                      <span className={styles.error}> {errors.message}</span>
                    ) : null}
                  </div>
                  <ToastContainer />
                </div>
                <div>
                  <button type="submit" className={styles.submitButton}>
                    {loader ? "Loading..." : "Submit"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
