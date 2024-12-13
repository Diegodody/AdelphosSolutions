import React, { useState } from 'react';

import styles from './DonationPage.module.css'


function DonationPage() {
  const [formData, setFormData] = useState({
    donation: '',
    fullName: '',
    email: '',
    birthDate: '',
    contact: '',
    cpf: '',
    paymentMethod: '', // Para definir um método de pagamento padrão basta trocar o campo vazio pelo desejado
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
    cardHolderName: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if ((!formData.donation.trim()) && (formData.donation <= 4) ) newErrors.donation = alert('O Valor mínimo para doação é de R$ 5,00 Reais. Digite um valor válido');

    if (!formData.fullName.trim()) newErrors.fullName = alert('O nome completo é obrigatório.');

    if (!formData.email.trim()) {
      newErrors.email = alert('O email é obrigatório.');
    } else if (!/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(formData.email)) {
      newErrors.email = alert('O email é inválido.');
    }

    if (!formData.birthDate.trim()) {
      newErrors.birthDate = alert('A data de nascimento é obrigatória.');
    } else if (!/^\d{4}-\d{2}-\d{2}$/.test(formData.birthDate)) {
      newErrors.birthDate = alert('A data de nascimento deve estar no formato YYYY-MM-DD.');
    }

    if (!formData.contact.trim()) {
      newErrors.contact = alert('O contato é obrigatório.');
    } else if (!/^\d{10,15}$/.test(formData.contact)) {
      newErrors.contact = alert('O contato deve conter entre 10 e 15 dígitos.');
    }

    if (!formData.cpf.trim()) {
      newErrors.cpf = alert('O CPF é obrigatório.');
    } else if (!/^\d{11}$/.test(formData.cpf)) {
      newErrors.cpf = alert('O CPF deve conter 11 dígitos.');
    }

    if (formData.paymentMethod === 'creditCard') {
      if (!formData.cardNumber.trim()) {
        newErrors.cardNumber = alert('O número do cartão é obrigatório.');
      } else if (!/^\d{16}$/.test(formData.cardNumber)) {
        newErrors.cardNumber = alert('O número do cartão deve conter 16 dígitos.');
      }

      if (!formData.cardExpiry.trim()) {
        newErrors.cardExpiry = alert('A validade do cartão é obrigatória.');
      } else if (!/^\d{2}\/\d{2}$/.test(formData.cardExpiry)) {
        newErrors.cardExpiry = alert('A validade deve estar no formato MM/YY.');
      }

      if (!formData.cardCVV.trim()) {
        newErrors.cardCVV = alert('O CVV é obrigatório.');
      } else if (!/^\d{3}$/.test(formData.cardCVV)) {
        newErrors.cardCVV = alert('O CVV deve conter 3 dígitos.');
      }

      if (!formData.cardHolderName.trim()) {
        newErrors.cardHolderName = alert('O nome no cartão é obrigatório.');
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const response = await fetch('https://localhost:4040', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar os dados.');
      }

      alert('Doação registrada com sucesso!');

      //Limpa os campos
      setFormData({
        donation: '',
        fullName: '',
        email: '',
        birthDate: '',
        contact: '',
        cpf: '',
        paymentMethod: 'creditCard',
        cardNumber: '',
        cardExpiry: '',
        cardCVV: '',
        cardHolderName: '',
      });

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bem Vindo à Página de Doação</h1>

      <form onSubmit={handleSubmit}>

        <div className={styles.div_label}>
          <label>Valor da Doação:</label>
          <input
            type="number"
            name="donation"
            value={formData.donation}
            onChange={handleChange}
          />
          {errors.donation && <span>{errors.donation}</span>}
        </div>

        <div className={styles.div_label}>
          <label>Nome Completo:</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <span>{errors.fullName}</span>}
        </div>

        <div className={styles.div_label}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div className={styles.div_label}>
          <label>Data de Nascimento:</label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
          {errors.birthDate && <span>{errors.birthDate}</span>}
        </div>

        <div className={styles.div_label}>
          <label>Contato:</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
          {errors.contact && <span>{errors.contact}</span>}
        </div>

        <div className={styles.div_label}>
          <label>CPF:</label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
          />
          {errors.cpf && <span>{errors.cpf}</span>}
        </div>

        <div>
          <h3 className={styles.title_payment}>Escolha uma forma de pagamento:</h3>

          <div className={styles.payment_choise}>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                checked={formData.paymentMethod === 'creditCard'}
                onChange={handleChange}
              />
              Cartão de Crédito
            </label>
          </div>

          <div className={styles.payment_choise}>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="debitCard"
                checked={formData.paymentMethod === 'debitCard'}
                onChange={handleChange}
              />
              Cartão de Débito
            </label>
          </div>

          <div className={styles.payment_choise}>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="boleto"
                checked={formData.paymentMethod === 'boleto'}
                onChange={handleChange}
              />
              Boleto
            </label>
          </div>

          <div className={styles.payment_choise}>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="pix"
                checked={formData.paymentMethod === 'pix'}
                onChange={handleChange}
              />
              Pix
            </label>
          </div>

        </div>

        {formData.paymentMethod === 'creditCard' && (
          <div>
            <h3 className={styles.title_card}>Informações do Cartão de Crédito:</h3>

            <div className={styles.div_card}>
              <label>Número do Cartão:</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
              />
              {errors.cardNumber && <span>{errors.cardNumber}</span>}
            </div>

            <div className={styles.div_card}>
              <label>Validade (MM/YY):</label>
              <input
                type="text"
                name="cardExpiry"
                value={formData.cardExpiry}
                onChange={handleChange}
              />
              {errors.cardExpiry && <span>{errors.cardExpiry}</span>}
            </div>

            <div className={styles.div_card}>
              <label className={styles.cvv_label}>CVV:</label>
              <input 
                type="text"
                name="cardCVV"
                value={formData.cardCVV}
                onChange={handleChange}
              />
              {errors.cardCVV && <span>{errors.cardCVV}</span>}
            </div>

            <div className={styles.div_card}>
              <label className={styles.card_label}>Nome no Cartão:</label>
              <input
                type="text"
                name="cardHolderName"
                value={formData.cardHolderName}
                onChange={handleChange}
              />
              {errors.cardHolderName && <span>{errors.cardHolderName}</span>}
            </div>

          </div>
        )}
        <div className={styles.div_btn}>
        <button type="submit">DOAR</button>
        </div>
      </form>
    </div>
  );
}

export default DonationPage;
