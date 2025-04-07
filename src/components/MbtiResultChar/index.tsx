import * as S from "./style";
import ENFJ from "../../assets/illustration/ENFJ.png";
import ENFP from "../../assets/illustration/ENFP.png";
import ENTJ from "../../assets/illustration/ENTJ.png";
import ENTP from "../../assets/illustration/ENTP.png";
import ESFJ from "../../assets/illustration/ESFJ.png";
import ESFP from "../../assets/illustration/ESFP.png";
import ESTJ from "../../assets/illustration/ESTJ.png";
import ESTP from "../../assets/illustration/ESTP.png";
import INFJ from "../../assets/illustration/INFJ.png";
import INFP from "../../assets/illustration/INFP.png";
import INTJ from "../../assets/illustration/INTJ.png";
import INTP from "../../assets/illustration/INTP.png";
import ISFJ from "../../assets/illustration/ISFJ.png";
import ISFP from "../../assets/illustration/ISFP.png";
import ISTJ from "../../assets/illustration/ISTJ.png";
import ISTP from "../../assets/illustration/ISTP.png";

interface MbtiResultCharProps {
  isMine?: boolean;
  mbti: string;
}

const mbtiImageMap: Record<string, string> = {
  ENFJ,
  ENFP,
  ENTJ,
  ENTP,
  ESFJ,
  ESFP,
  ESTJ,
  ESTP,
  INFJ,
  INFP,
  INTJ,
  INTP,
  ISFJ,
  ISFP,
  ISTJ,
  ISTP,
};

const MbtiResultChar = ({ isMine = false, mbti }: MbtiResultCharProps) => {
  return (
    <S.Layout>
      <S.CharacterWrapper>
        <S.ImgBackGround />
        <S.MbtiCharacter src={mbtiImageMap[mbti]} />
      </S.CharacterWrapper>

      <S.UserDetail>
        {isMine ? <S.User>나</S.User> : <S.User>상대</S.User>}
        <S.Mbti>({mbti})</S.Mbti>
      </S.UserDetail>
    </S.Layout>
  );
};

export default MbtiResultChar;
