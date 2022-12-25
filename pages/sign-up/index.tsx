import { useState } from "react"
import { signUp } from "../services/sign-up.service"

export default function SignUp() {

  const [values, setValues] = useState({
    name: "Lau",
    email: "lau.133@gmail.com",
    password: "laura",
    confirmPassword: "laura",
    phone: "3136928836",
    avatar: undefined,
    role: "customer"
  })

  const handleInputChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleCreateUser = async () => {
    if (values.password !== values.confirmPassword) {
      alert('La contraseña no coincide')
    }
    try {
      const respCreateUser = await signUp(values);
      if (respCreateUser.message) {
        alert(respCreateUser.message)
      } else {
        alert('creado correctamente')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div>
      <h1>Create Account</h1>
      <input
        name="fullname"
        type="text"
        placeholder="Name"
        value={values.name}
        onChange={handleInputChange}
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={values.email}
        onChange={handleInputChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={values.password}
        onChange={handleInputChange}
      />
      <input
        name="passwordConfirmation"
        type="password"
        placeholder="Confirm Password"
        value={values.confirmPassword}
        onChange={handleInputChange}
      />
      <input
        name="phone"
        type="text"
        placeholder="Numero Contacto"
        value={values.phone}
        onChange={handleInputChange}
      />
      <input
        name="avatar"
        type="file"
        placeholder="Foto Perfil"
        value={values.avatar}
        onChange={handleInputChange}
      />
      <input
        name="role"
        type="text"
        value={values.role}
        onChange={handleInputChange}
      />

      <div>
        <button
          onClick={handleCreateUser}
        >Register</button>
      </div>
    </div >
  )
}