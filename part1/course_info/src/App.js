const appInfo = {
  course: "Half Stack application development",
  parts: {
    part1: "Fundamentals of React",
    exercises1: 10,
    part2: "Using props to pass data",
    exercises2: 7,
    part3: "State of a component",
    exercises3: 14,
  },
};

const App = () => {
  const { course, parts } = appInfo;
  const { exercises1, exercises2, exercises3 } = parts;

  const Header = ({ course }) => <h1>{course}</h1>;
  const Part = ({ part, exercises }) => (
    <p>
      {part} {exercises}
    </p>
  );
  const Content = ({ contentInfo }) => {
    const { part1, part2, part3, exercises1, exercises2, exercises3 } =
      contentInfo;
    return (
      <div>
        <Part part={part1} exercises={exercises1} />
        <Part part={part2} exercises={exercises2} />
        <Part part={part3} exercises={exercises3} />
      </div>
    );
  };
  const Total = ({ total }) => <p>Number of exercises {total}</p>;

  return (
    <div>
      <Header course={course} />
      <Content contentInfo={parts} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
