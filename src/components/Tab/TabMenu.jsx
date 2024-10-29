const TabMenu = (props) => {
  const { title = "TabMenu1", index, onClickTabMenu } = props;

  const handleCilckTabMenu = () => {
    // 현재 TabMenu를 클릭해서, 해당 TabMenu가 활성화 상태인지 아닌지 표시
    // 클릭한 결과를 어디로 알려줘야됨...?
    onClickTabMenu(index);
  };
  return(
  <>
    <button onClick={handleCilckTabMenu}>{title}</button>
  </>
  );
};

export default TabMenu;
