function appStart() {
  const handleKeydown = () => {
    console.log("키가 눌렸습니다!!");
  };
  window.addEventListener("keydown", handleKeydown);
}

appStart();

console.log("안녕하세요");
