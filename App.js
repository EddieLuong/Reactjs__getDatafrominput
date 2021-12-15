import { useState, useEffect } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const [checked, setChecked] = useState();
  const [checkbox, setCheckbox] = useState([]);

  const courses = [
    {
      name: "html,css",
      id: 1,
      coin: 50,
    },
    {
      name: "Responsive",
      id: 2,
      coin: 100,
    },
    {
      name: "Javascript",
      id: 3,
      coin: 150,
    },
  ];
  useEffect(() => {
    if (user !== undefined) {
      console.log(user);
    }
  }, [user]);
  function handleClick() {
    const course = courses.filter((course) => {
      return course.id === checked;
    });

    setUser({
      userName: userName,
      password: password,
      radio: course,
      checkbox: checkbox,
    });
  }
  function handleCheck(id) {
    setCheckbox((prev) => [...prev, id]);
  }
  return (
    <div>
      <form action="">
        <label htmlFor="userName">User name or email</label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <label htmlFor="password">password</label>
        <input
          required
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          id="password"
        />
        <label htmlFor="">Choose course</label>
        {courses.map((course, index) => (
          <div key={index}>
            <input
              checked={checked === course.id}
              onChange={() => {
                setChecked(course.id);
              }}
              type="radio"
            />
            {course.name}
          </div>
        ))}
        <label htmlFor="">Choose course</label>
        {courses.map((course, index) => (
          <div key={index}>
            <input
              checked={checkbox.includes(course.id)}
              onChange={() => handleCheck(course.id)}
              type="checkbox"
            />
            {course.name}
          </div>
        ))}
        <button
          type="button"
          onClick={() => {
            handleClick();
          }}
        >
          Click
        </button>
      </form>
    </div>
  );
}

export default App;
