import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
      
  });


  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    const newErrors = {};

    if (!/^[А-Яа-яA-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Аты тек әріптерден тұруы керек";
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Жарамды email енгізіңіз";
    }

    if (!/^\+?\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Жарамды телефон нөмірін енгізіңіз";
    }

    if (
      !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "Пароль кемінде 8 символ, 1 үлкен әріп, 1 сан, 1 арнайы символ болу керек";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Қайталанған пароль сәйкес емес";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData(formData);
    } else {
      setSubmittedData(null);
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>📝 Пайдаланушы тіркелуі</h2>
        {submittedData ? (
          <div className="success-box">
            <h3>✅ Сәтті тіркелдіңіз!</h3>
            <p><strong>Аты:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Телефон:</strong> {submittedData.phone}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Атыңыз"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
            />
            {errors.name && <p className="error-text">{errors.name}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}

            <input
              type="text"
              name="phone"
              placeholder="Телефон"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? "error" : ""}
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}

            <input
              type="password"
              name="password"
              placeholder="Құпия сөз"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? "error" : ""}
            />
            {errors.password && (
              <p className="error-text">{errors.password}</p>
            )}

            <input
              type="password"
              name="confirmPassword"
              placeholder="Құпия сөзді қайталаңыз"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword ? "error" : ""}
            />
            {errors.confirmPassword && (
              <p className="error-text">{errors.confirmPassword}</p>
            )}

            <button type="submit">🚀 Тіркелу</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default RegistrationForm;
