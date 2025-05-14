import Users from '../models/Users.js'
import bcrypt from 'bcryptjs'
import { generateToken } from '../helpers/AuthHelper.js'

// Common Registration for Applicant & Recruitor based on role access~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, role, applicantProfile, recruitorProfile } =
      req.body

    const existingUser = await Users.findOne({ email })
    if (existingUser)
      return res
        .status(400)
        .send({ message: 'User Already Exist, Try Loggin in!' })

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new Users({
      name: name,
      email: email,
      password: hashedPassword,
      role: role,
      applicantProfile: role === 'applicant' ? applicantProfile : undefined,
      recruitorProfile: role === 'recruitor' ? recruitorProfile : undefined
    })

    await newUser.save()

    const token = generateToken(newUser)

    return res.status(201).send({
      message: 'User Registration Successful',
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
      }
    })
  } catch (error) {
    return res.status(500).send({
      message: 'Server Error-Registering New User'
    })
  }
}

//  Common Login API for Applicant and Recruitor based on role access
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await Users.findOne({ email })
    if (!user) {
      return res.status(400).send({ message: 'Invalid email or password' })
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).send({ message: 'Invalid Email or Password' })
    }
    const token = generateToken(user)

    return res.status(201).send({
      message: 'User Logged In Successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    })
  } catch (error) {
    return res.status(500).send({
      message: 'Server Error- Login API'
    })
  }
}
