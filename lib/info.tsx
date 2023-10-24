import me from "../app/avatar.jpg"

export const name = "Jason Southin"
export const avatar = me

export const about = () => {
  const yearsCoding = Math.abs(
    new Date("09/03/2018").getFullYear() - new Date().getFullYear()
  )
  const today = new Date()
  let month = today.getMonth() + 1

  return (
    <>
      Hey, I have been a developer for <strong>{yearsCoding}</strong> years and{" "}
      <strong>{month}</strong> months, I work at Newsteam as a Software
      Engineer.
    </>
  )
}
export const bio = () => {
  return (
    <>
      When I'm not coding, I'm probably playing video games or coding. I also
      love to travel and explore new places.
    </>
  )
}
