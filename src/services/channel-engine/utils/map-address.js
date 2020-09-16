export const mapAddress = (data) => {
  if(!data) return null

  return {
    firstName: data.FirstName,
    lastName: data.LastName,
    streetName: data.StreetName,
    houseNumber: data.HouseNr,
    addition: data.HouseNrAddition,
    zipCode: data.ZipCode,
    city: data.City
  }
}
