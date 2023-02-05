import { useState } from 'react';

const guestList = [
  {
    data: {
      name: 'Antonio',
      lastName: 'De la Rosa',
      age: 20,
      email: 'delarosa@mail.com',
      id: {
        value: 2090,
      },
    },
    data1: {
      name: 'Peter',
      lastName: 'Aguilera',
      age: 35,
      email: 'aguilera@mail.com',
      id: {
        value: 2098,
      },
    },
    data2: {
      name: 'jhon',
      lastName: 'Fujimori',
      age: 34,
      email: 'fujimori@mail.com',
      id: {
        value: 20100,
      },
    },
    data3: {
      name: 'Frank',
      lastName: 'Contrera',
      age: 45,
      email: 'contrera@mail.com',
      id: {
        value: 20101,
      },
    },
  },
];

export default function Checkbox() {
  const [list, setList] = useState(guestList);

  return (
    <>
      {guestList.map((element) => {
        //console.log(element);
        return (
          <div key={element.data.id}>
            {' '}
            <h2>Firstname: {element.data.name}</h2>
            <h2>Lastname: {element.data.lastName}</h2>
            <h2>Email: {element.data.email}</h2>
            <h2>Age: {element.data.age}</h2>
            <h2>Id: {element.data.id.value}</h2>
          </div>
        );
      })}
      <main class="main-section">
        <h1 className="h1"> Guest List </h1>
        <h2>Adding Guest</h2>
        <div data-test-id="guest">
          <form>
            <label htmlFor="name"> Enter your firstname</label>
            <input type="text" name="Firstname" />
          </form>
        </div>
        <div data-test-id="guest">
          <form>
            <label htmlFor="unname"> Enter your lastname</label>
            <input type="text " name="Lastname" />
            <input type="submit" value="Return" />
          </form>
        </div>

        <div>
          <button class="delete-guest" type="button">
            {' '}
            Delete Guest
          </button>
        </div>
      </main>
    </>
  );
}
