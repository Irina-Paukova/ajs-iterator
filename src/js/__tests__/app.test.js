import Person from '../person';
import Team from '../team';

test('...', () => {
  const char1 = new Person('Nikita', 'Bowman');
  const char2 = new Person('Nikita', 'Daemon');
  const char3 = new Person('Nikita', 'Magician');
  const expected = new Team([char1, char2, char3]);
  const testTeam = [];

  for (const member of expected) {
    testTeam.push(member);
  }

  expect(expected.innerTeam).toEqual(testTeam);
});


// for (letnum of range) {console.log(num)};
