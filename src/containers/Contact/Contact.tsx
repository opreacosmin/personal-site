import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import './Contact.scss';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { AppWrap, MotionWrap } from '../../wrapper';
import * as emailjs from 'emailjs-com';

interface FormData {
  from_name: string;
  subject: string;
  email: string;
  message: string;
}

interface FormErrors {
  from_name?: string;
  subject?: string;
  email?: string;
  message?: string;
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    from_name: '',
    subject: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const form = useRef<HTMLFormElement>(null);

  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'from_name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        break;
      case 'subject':
        if (!value.trim()) return 'Subject is required';
        if (value.trim().length < 3) return 'Subject must be at least 3 characters';
        break;
      case 'email': {
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        break;
      }
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        break;
    }
    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Real-time validation for touched fields
    if (touched[name]) {
      const error = validateField(name as keyof FormData, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    const error = validateField(name as keyof FormData, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      from_name: true,
      subject: true,
      email: true,
      message: true,
    });

    if (!validateForm()) {
      return;
    }

    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE,
        form.current,
        import.meta.env.VITE_APP_USER_ID
      )
      .then(() => {
        setSubmitStatus('success');
        setFormData({ from_name: '', subject: '', email: '', message: '' });
        setTouched({});
        e.currentTarget.reset();
      })
      .catch(() => {
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const getInputClassName = (fieldName: keyof FormData): string => {
    const baseClass = 'form-control';
    if (touched[fieldName] && errors[fieldName]) {
      return `${baseClass} error`;
    }
    if (touched[fieldName] && !errors[fieldName] && formData[fieldName]) {
      return `${baseClass} valid`;
    }
    return baseClass;
  };

  return (
    <div className="contact-wrapper">
      <div className="custom-shape-divider-top-1691349754">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="title">
        <h2 className="section-title">Hai să povestim! Contactează-mă.</h2>
        <div className="letter-image" aria-hidden="true">
          <div className="animated-mail">
            <div className="back-fold" />
            <div className="letter">
              <div className="letter-border" />
              <div className="letter-title" />
              <div className="letter-context" />
              <div className="letter-stamp">
                <div className="letter-stamp-inner" />
              </div>
            </div>
            <div className="top-fold" />
            <div className="body" />
            <div className="left-fold" />
          </div>
          <div className="shadow" />
        </div>
      </div>

      {submitStatus === 'success' && (
        <div className="status-message success" role="alert">
          <CheckCircleOutlineIcon />
          <span>Mesajul a fost trimis cu succes! O să te contactez curând.</span>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="status-message error" role="alert">
          <ErrorOutlineIcon />
          <span>
            Nu am putut trimite mesajul. Te rog să încerci din nou sau contactează-mă direct.
          </span>
        </div>
      )}

      <form
        ref={form}
        onSubmit={sendEmail}
        id="contact-form"
        className="form"
        aria-label="Contact form"
        noValidate
      >
        <div className="form-group">
          <label htmlFor="name" className="visually-hidden">
            Numele tău
          </label>
          <div className="col-sm-12">
            <input
              type="text"
              className={getInputClassName('from_name')}
              id="name"
              placeholder="NUMELE TĂU"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-required="true"
              aria-invalid={touched.from_name && !!errors.from_name}
              aria-describedby={errors.from_name ? 'name-error' : undefined}
              disabled={isSubmitting}
            />
            {touched.from_name && errors.from_name && (
              <span id="name-error" className="error-message" role="alert">
                {errors.from_name}
              </span>
            )}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject" className="visually-hidden">
            Subiect
          </label>
          <div className="col-sm-12">
            <input
              type="text"
              className={getInputClassName('subject')}
              id="subject"
              placeholder="SUBIECT"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-required="true"
              aria-invalid={touched.subject && !!errors.subject}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
              disabled={isSubmitting}
            />
            {touched.subject && errors.subject && (
              <span id="subject-error" className="error-message" role="alert">
                {errors.subject}
              </span>
            )}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="visually-hidden">
            Email-ul tău
          </label>
          <div className="col-sm-12">
            <input
              type="email"
              className={getInputClassName('email')}
              id="email"
              placeholder="EMAIL-UL TĂU"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-required="true"
              aria-invalid={touched.email && !!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              disabled={isSubmitting}
            />
            {touched.email && errors.email && (
              <span id="email-error" className="error-message" role="alert">
                {errors.email}
              </span>
            )}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message" className="visually-hidden">
            Mesaj
          </label>
          <textarea
            className={getInputClassName('message')}
            id="message"
            rows={10}
            placeholder="MESAJUL TĂU"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-required="true"
            aria-invalid={touched.message && !!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
            disabled={isSubmitting}
          />
          {touched.message && errors.message && (
            <span id="message-error" className="error-message" role="alert">
              {errors.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="form-btn"
          disabled={isSubmitting}
          aria-label={isSubmitting ? 'Se trimite mesajul...' : 'Trimite mesajul'}
        >
          <span>{isSubmitting ? 'Se trimite...' : 'Trimite'}</span>
          <SendOutlinedIcon className="icon" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
}

export default AppWrap(MotionWrap(Contact, 'app__skills'), 'contact', 'app__whitebg');
