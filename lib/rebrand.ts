export function rebrandText(text: string): string {
  return text
    .replace(/TACKLES Pro/gi, "RocketSingh")
    .replace(/TACKLES/gi, "RocketSingh")
    .replace(/tackles\.pro/gi, "cleaningsewa.com")
    .replace(/San Francisco/gi, "Chennai, India")
    .replace(/handyman/gi, "cleaning")
    .replace(/Handyman/gi, "Cleaning")
    .replace(/GardenSewa/gi, "RocketSingh")
    .replace(/Cleaning Sewa/gi, "RocketSingh");
}
