const regexEmail = (string) => {
  const regexEmail = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/
  if (regexEmail.test(string)) {
    return true
  } else {
    alert('You have entered an invalid email address!')
    return
  }
}

const regexPhone = (string) => {
  var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  if (string.value.match(regex)) {
    return true
  } else {
    alert('message')
    return false
  }
}
