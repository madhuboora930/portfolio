import { useResume } from "@/context/ResumeContext"
import TextField from "@/components/ui/TextField"

export default function PersonalInfoForm() {
  const { document, updatePersonal } = useResume()
  const { personal } = document.content

  return (
    <div className="grid grid-cols-2 gap-3">
      <TextField
        label="Full Name"
        value={personal.fullName}
        onChange={(value) => updatePersonal({ fullName: value })}
        placeholder="Alex Morgan"
        autoComplete="name"
        className="col-span-2"
      />
      <TextField
        label="Job Title"
        value={personal.title}
        onChange={(value) => updatePersonal({ title: value })}
        placeholder="Product Designer"
        autoComplete="organization-title"
        className="col-span-2"
      />
      <TextField
        label="Email"
        value={personal.email}
        onChange={(value) => updatePersonal({ email: value })}
        placeholder="you@email.com"
        type="email"
        autoComplete="email"
      />
      <TextField
        label="Phone"
        value={personal.phone}
        onChange={(value) => updatePersonal({ phone: value })}
        placeholder="+1 555 123 4567"
        autoComplete="tel"
      />
      <TextField
        label="Location"
        value={personal.location}
        onChange={(value) => updatePersonal({ location: value })}
        placeholder="Austin, TX"
        autoComplete="address-level2"
      />
      <TextField
        label="Website"
        value={personal.website}
        onChange={(value) => updatePersonal({ website: value })}
        placeholder="yoursite.com"
        autoComplete="url"
      />
    </div>
  )
}
