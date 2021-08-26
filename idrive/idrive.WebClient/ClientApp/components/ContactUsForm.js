import React, {useState, useRef} from 'react';
import {faCheck, faTimes, faCog} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ReCAPTCHA from "react-google-recaptcha";

const ContactUsForm = (props) => {
    let isSmall = props.media === "xs" || props.media === "sm";

    //recaptcha dev key: 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
    const reCaptchaApiKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
    const reCaptchaRef = useRef(null);

    const isValidValue = {
        NotSet: 0,
        InValid: 1,
        Valid: 2
    }

    const defaultForm = {
        name: {isDirty: false, isValid: isValidValue.NotSet, value: ""},
        email: {isDirty: false, isValid: isValidValue.NotSet, value: ""},
        contactNumber: {isDirty: false, isValid: isValidValue.NotSet, value: ""},
        subject: {isDirty: false, isValid: isValidValue.NotSet, value: ""},
        company: {isDirty: false, isValid: isValidValue.NotSet, value: ""},
        message: {isDirty: false, isValid: isValidValue.NotSet, value: ""},
        captcha: {isDirty: false, isValid: isValidValue.NotSet, value: false}
    }

    const defaultFormFeedback = {
        isSending: false,
        isComplete: false,
        wasSuccessful: false,
    }

    const [isFormValid, setIsFormValid] = useState(isValidValue.NotSet)
    const [form, setForm] = useState(defaultForm)
    const [formFeedback, setFormFeedback] = useState(defaultFormFeedback)
    const [isLocked, setIsLocked] = useState(false)

    const changeHandler = (e) => {
        const {name, value, type} = (e).target;
        setForm(prevState => (
            {
                ...prevState,
                [name]:
                    {
                        isDirty: true,
                        isValid: isValidValue.NotSet,
                        value: value
                    }
            }
        ))
    }

    const onRecaptchaChange = (e) => {
        let element = {
            target: {name: "captcha", value: reCaptchaRef.current.getValue(), required: true}
        }

        changeHandler(element);
        onBlurHandler(element);

    }

    const validateForm = () => {
        for (let propName in form) {
            if (!Object.prototype.hasOwnProperty.call(form, propName))
                continue

            let prop = form[propName];
            if (prop.isValid === isValidValue.InValid || prop.isValid === isValidValue.NotSet) {
                setIsFormValid(isValidValue.InValid)
                return
            }
            setIsFormValid(isValidValue.Valid)
        }
    }

    const onBlurHandler = (e) => {
        const {name, value, required, type} = (e).target;

        if (!required)
            return

        let formValue = form[name]

        if (formValue.isDirty && !isValueValid(form[name].value, type, required)) {
            formValue.isValid = isValidValue.InValid
        } else {
            formValue.isValid = isValidValue.Valid
        }

        setForm(prevState => (
            {
                ...prevState,
                [name]:
                    {
                        isDirty: formValue.isDirty,
                        isValid: formValue.isValid,
                        value: value
                    }
            }
        ))
        validateForm()
    }

    const isValueValid = (value, type, required) => {

        if (type === "email") {
            const regex = new RegExp('.+\\@.+\\..+');
            return regex.test(value);
        }

        if (required)
            return value || value.trim();

        return true;
    }

    const getClass = (propName) => {
        let formValue = form[propName];

        if (!formValue.isDirty)
            return "form-control"

        if (formValue.isValid === isValidValue.NotSet) {
            return "form-control"
        }

        return formValue.isValid === isValidValue.Valid ? "form-control is-valid" : "form-control is-invalid"
    }

    const clearForm = () => {
        setIsLocked(false);
        setForm(defaultForm);
        setFormFeedback(defaultFormFeedback);

        reCaptchaRef.current.reset();
    }

    const submitHandler = (e) => {
        e.preventDefault();

        setFormFeedback({isSending: true, isComplete: false, wasSuccessful: false})
        setIsLocked(true)
        fetch('ContactUs', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: form.name.value,
                email: form.email.value,
                contactNumber: form.contactNumber.value,
                company: form.company.value,
                message: form.message.value,
                token: form.captcha.value,
            }),
        }).then((response) => {
            if (response != null && response.status != null && response.status === 200) {
                setFormFeedback({isSending: false, isComplete: true, wasSuccessful: true});
                setTimeout(() => clearForm(), 3000);
            } else {
                setFormFeedback({isSending: false, isComplete: true, wasSuccessful: false});
            }
        }).catch((response) => {
            setFormFeedback({isSending: false, isComplete: true, wasSuccessful: false});
        })
    }

    return (
        <div className='' id='contact'>
            <form className="" onSubmit={submitHandler} noValidate>
                <div className='flex justify-center pt-12 '>
                    <div className='w-11/12'>
                        <div className=''>
                            <div className='md:flex md:justify-center'>
                                <div className='md:flex-col md:p-1'>
                                    {/*className={getClass("contactNumber")}*/}
                                    <div className='border-2 border-black rounded mt-2 '>
                                        <input className='bg-gray-100 w-full px-1 lg:w-64 ' type="text"
                                               name="name" placeholder='Name'
                                               value={form.name.value}
                                               onChange={(e) => changeHandler(e)}
                                               onBlur={(e) => onBlurHandler(e)}
                                               disabled={isLocked}
                                               required/>
                                        <div className="valid-feedback"/>
                                    </div>
                                    <div className='border-2 border-black rounded mt-2 '>
                                        <input className='bg-gray-100 w-full px-1' type="text" name="contactNumber"
                                               placeholder='Phone Number'
                                               value={form.contactNumber.value}
                                               onChange={(e) => changeHandler(e)}
                                               onBlur={(e) => onBlurHandler(e)}
                                               disabled={isLocked}
                                               required/>
                                        <div className="valid-feedback"/>
                                    </div>
                                    <div className='border-2 border-black rounded mt-2 '>
                                        <input type="email" name="email" placeholder="Email address"
                                               className='bg-gray-100 w-full px-1'
                                               value={form.email.value}
                                               onChange={(e) => changeHandler(e)}
                                               onBlur={(e) => onBlurHandler(e)}
                                               disabled={isLocked}
                                               required/>
                                        <div className="valid-feedback"/>
                                    </div>
                                    <div className='border-2 border-black rounded mt-2 '>
                                        <input className='bg-gray-100 w-full px-1'
                                               type="text" name="company" placeholder="Company Name"
                                               value={form.company.value}
                                               onChange={(e) => changeHandler(e)}
                                               onBlur={(e) => onBlurHandler(e)}
                                               disabled={isLocked}
                                               required/>
                                        <div className="valid-feedback"/>
                                    </div>
                                </div>
                                <div className='md:flex-col md:p-1'>
                                    <div className='border-2 border-black rounded mt-2'>
                                <textarea className=' bg-gray-100 w-full px-1 '
                                          name="message" rows="5"
                                          placeholder="Message"
                                          value={form.message.value} onChange={(e) => changeHandler(e)}
                                          onBlur={(e) => onBlurHandler(e)}
                                          disabled={isLocked}
                                          required/>
                                        <div className="valid-feedback"/>
                                    </div>
                                    <div className='flex justify-center mt-2'>
                                        <div className=''>
                                            <ReCAPTCHA
                                                ref={reCaptchaRef}
                                                sitekey={reCaptchaApiKey}
                                                name="captcha"
                                                onChange={(e) => onRecaptchaChange(e)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                   {/* <div className=''>
                        <div className=''>
                            <div className=''>
                                    <textarea className='' 
                                              name="message" rows="5"
                                              placeholder="Message"
                                              value={form.message.value} 
                                              onChange={(e) => changeHandler(e)}
                                              onBlur={(e) => onBlurHandler(e)}
                                              disabled={isLocked}
                                              required/>
                                <div className="valid-feedback"/>
                            </div>
                        </div>
                    
                        <div className=''>
                            <div className=''>
                                <div className=''>
                                    <ReCAPTCHA
                                        ref={reCaptchaRef}
                                        sitekey={reCaptchaApiKey}
                                        name="captcha"
                                        onChange={(e) => onRecaptchaChange(e)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>*/}
                </div>


                {!formFeedback.isComplete &&
                <div className='flex justify-center mt-2'>
                    <button type="submit" className='bg-white border-2 border-black rounded p-1'
                            disabled={isFormValid !== isValidValue.Valid}>
                        {!formFeedback.isSending && <span>Send Message</span>}
                        {formFeedback.isSending &&
                        <span>Sending...&nbsp;<FontAwesomeIcon icon={faCog} spin/></span>}
                    </button>
                </div>
                }
                {formFeedback.isComplete &&
                <div className="feedback-container mlr-auto">
                    {formFeedback.wasSuccessful &&
                    <span>Message sent successfully &nbsp; <FontAwesomeIcon icon={faCheck}
                                                                            style={{color: "green"}}/></span>}
                    {!formFeedback.wasSuccessful &&
                    <span>Could not send your message. Please try again later.&nbsp; <FontAwesomeIcon icon={faTimes}
                                                                                                      style={{color: "red"}}/></span>}
                </div>
                }
            </form>
        </div>
    );
}
export default ContactUsForm;