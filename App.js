import { useEffect, useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState();
  const [checkbox, setCheckbox] = useState([]);
  const [user, setUser] = useState();

  const courses = [
    {
      name: "HTML,CSS",
      id: 1,
      coin: 50,
    },
    {
      name: "Javascript",
      id: 2,
      coin: 100,
    },
    {
      name: "ReactJs",
      id: 3,
      coin: 150,
    },
  ];

  useEffect(() => {
    if (user !== undefined) {
      console.log(user);
    }
  }, [user]);
  const handleClick = () => {
    const course = courses.filter((course) => {
      return course.id === checked;
    });
    setUser({
      userName: userName,
      password: password,
      radio: course[0].name,
      checkbox: checkbox,
    });
  };
  const handleChange = (id) => {
    setCheckbox((prev) => {
      const isChecked = checkbox.includes(id);
      if (isChecked) {
        return checkbox.filter((item) => {
          return item !== id;
        });
      }
      return [...prev, id];
    });
  };
  return (
    <div>
      <form
        action=""
        style={{ display: "flex", flexDirection: "column", width: "40%" }}
      >
        <label htmlFor="userName">User name or email</label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label>Choose a Course</label>
        {courses.map((course, index) => {
          return (
            <div key={index}>
              <input
                type="radio"
                checked={checked === course.id}
                onChange={() => {
                  setChecked(course.id);
                }}
              />
              {course.name}
            </div>
          );
        })}
        <label>Choose some Course</label>
        {courses.map((course, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                checked={checkbox.includes(course.id)}
                onChange={() => {
                  handleChange(course.id);
                }}
              />
              {course.name}
            </div>
          );
        })}
        <button type="button" onClick={handleClick}>
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
