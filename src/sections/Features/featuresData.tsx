import { Feature } from "@/types/feature";
import { HeartHandshakeIcon, HeartPulseIcon, PillIcon, StethoscopeIcon, UserIcon, WandSparklesIcon } from "lucide-react";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <UserIcon />
    ),
    title: "Personalized Profiles",
    paragraph:
      "Create and manage your personal health profile with ease.",
  },
  {
    id: 1,
    icon: (
      <StethoscopeIcon />
    ),
    title: "Symptom Tracking",
    paragraph:
      "Easily track and log your symptoms for accurate analysis.",
  },
  {
    id: 1,
    icon: (
      <PillIcon />
    ),
    title: "Medication Management",
    paragraph:
      "Keep track of your prescriptions and receive timely reminders.",
  },
  {
    id: 1,
    icon: (
      <HeartPulseIcon />
    ),
    title: "Health Analytics",
    paragraph:
      "Get detailed insights into your health trends over time.",
  },
  {
    id: 1,
    icon: (
      <WandSparklesIcon />
    ),
    title: "AI Recommendations",
    paragraph:
      "Receive personalized recommendations for your health concerns.",
  },
  {
    id: 1,
    icon: (
      <HeartHandshakeIcon />
    ),
    title: "Wellness Tips",
    paragraph:
      "Receive expert tips and advice to maintain your health.",
  },
];
export default featuresData;
