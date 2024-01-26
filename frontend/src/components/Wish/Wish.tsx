import { Wish } from "../../types/Wish"

type Props = {
  wish: Wish,
};

export const FullfieldWish: React.FC<Props> = ({wish}) => {
  return (
    <section className="wish">
      <div className="wish__left">
        <img className="wish__left--img" src={wish.attachment} alt="person" />
      </div>
      <div className="wish__right">

      </div>
    </section>
  )
}