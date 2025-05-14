import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name:{
      type:String,
      required:true,
    },
    phoneNumber:{
      type:Number,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['recruitor', 'applicant'],
      default: 'applicant'
    },
    applicantProfile: {
      experience: { type: String },
      skills: [String],
      education: [{ school: String, degree: String, year: String }],
      // appliedJobs: [{ type: mongoose.Schema.Type.ObjectId, ref: 'Job' }],
      // savedJobs:[{ type: mongoose.Schema.Type.ObjectId, ref: 'Job' }],
    },
    recruitorProfile: {
      companyName: { type: String },
      companyWebsite: { type: String },
      bio: { type: String },
      // jobPosts: [{ type: mongoose.Schema.Type.ObjectId, ref: 'Job' }]
    },
    isVerified: { type: Boolean, default: false },
    avatarUrl: { type: String },
    createdAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
)

export default mongoose.model('Users', userSchema)
