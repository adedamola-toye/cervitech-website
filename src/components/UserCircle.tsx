

interface UserCircleProps {
  name: string; // name is a string
}

function UserCircle({ name }: UserCircleProps) {
  const firstLetter = name[0].toUpperCase();
  const colors = ["#f87171", "#60a5fa", "#34d399", "#facc15", "#a78bfa"];
  const bgColor = colors[name.length % colors.length]; // random-ish color based on name length

  return (
    <div
      style={{
        backgroundColor: bgColor,
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "15px",
        /* fontWeight: "500" */

      }}
    >
      {firstLetter}
    </div>
  );
}

export  default UserCircle