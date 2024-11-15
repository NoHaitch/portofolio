import {
  Body,
  Container,
  Head,
  Html,
  Link,
  Preview,
  Text
} from '@react-email/components'

interface ContactFormEmailProps {
  name: string
  email: string
  message: string
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message
}) => (
  <Html>
    <Head />
    <Preview>Contact Form Submission</Preview>

    <Body style={main}>
      <Text style={header}>
        Someone have filled the contact form submission from your{' '}
        <Link href='#'>portofolio.</Link>
        Make sure you contact the email to response as they won&apos;t see this email
        sent.
      </Text>
      <Container style={container}>
        <Text style={title}>Name: {name}</Text>
        <Text style={emailStyle}>Email: {email}</Text>
        <Text style={messageHeader}>Message:</Text>
        <Text style={messageContent}>{message}</Text>
      </Container>
    </Body>
  </Html>
)

export default ContactFormEmail

const main = {
  fontFamily: 'Ember,Helvetica,Arial,sans-seri',
  backgroundColor: '#ffffff'
}

const title = {
  fontWeight: 'bold',
  fontSize: '16px'
}

const emailStyle = {
  fontWeight: 'bold',
  fontSize: '16px'
}

const messageHeader = {
  fontWeight: 'bold',
  fontSize: '16px'
}

const messageContent = {
  fontSize: '12px'
}

const container = {
  backgroundColor: '#e0ffe2',
  margin: '0 auto',
  padding: '20px'
}

const header = {
  fontSize: '16px'
}
