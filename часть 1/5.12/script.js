// 1
let user = {
  name: "Василий Иванович",
  age: 35,
};
let json = JSON.stringify(user);
let newUser = JSON.parse(json);

// 2
let room = {
  number: 23,
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
  place: room,
};
room.occupiedBy = meetup;
meetup.self = meetup;

alert(
  JSON.stringify(meetup, function replacer(key, value) {
    return key != "" && value == meetup ? undefined : value;
  })
);
