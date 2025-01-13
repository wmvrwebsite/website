import type { Schema } from '../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';

const client = generateClient<Schema>();

interface UserInput {
  name: string;
  phone: string;
  email: string;
}

export default async function handleSubmit(
  e: React.FormEvent<HTMLFormElement>,
  input: UserInput,
  setName: React.Dispatch<React.SetStateAction<string>>,
  setPhone: React.Dispatch<React.SetStateAction<string>>,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  handleClosePopup: () => void
) {
  e.preventDefault();
  try {
    await client.models.Volunteer.create({
      name: input.name,
      phone: input.phone,
      email: input.email,
    });
    alert(`Thank you for your interest, ${input.name}!\nPhone: ${input.phone}\nEmail: ${input.email}`);
    setName('');
    setPhone('');
    setEmail('');
    handleClosePopup();
  } catch (error) {
    console.error('Error saving user input:', error);
  }
}