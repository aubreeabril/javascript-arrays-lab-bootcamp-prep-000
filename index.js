const app = "I don't do much."
var kittens = []
var name;

function destructivelyAppendKitten(name) {
  var kittens = [];
  kittens.push("bob")
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}
