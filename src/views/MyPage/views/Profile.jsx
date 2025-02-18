import SocialLinks from "../components/SocialLinks";

const Profile = () => {
  return (
    <div className="border rounded border-black h-full min-w-36 max-w-44 p-4 flex-1">
      <div className="">
        <img
          className="w-full"
          src="https://i.pinimg.com/736x/43/82/2f/43822fe9bc57123b6b200bf8964ec798.jpg"
        />
      </div>

      <div className="border border-black w-full">
        <ul className="">
          <li>Yoon / Vayn</li>
        </ul>
        <ul>
          <li>She / her</li>
        </ul>
      </div>

      <SocialLinks />
    </div>
  );
};

export default Profile;
