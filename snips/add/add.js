// @flow
const countries = {
  US: "United States",
  IT: "Italy",
  FR: "France"
}

type Country = $Keys<typeof countries>

// eslint-disable-next-line
const italy: Country = "IT"
// eslint-disable-next-line
const nope: Country = "nope" // 'nope' is not a Country
