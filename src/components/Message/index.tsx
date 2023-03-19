import style from "./Message.module.css";

const Message = ({ show }: { show: boolean }) => {
  return (
    <div className={style.message + " " + (show ? style.show : style.hide)}>
      复制成功
    </div>
  );
};
export default Message;
