import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import { Provider } from "./provider/card_context";
import useHover from "../../components/hooks/useHover"

const AppCard = ({
  children,
  width = "300px",
  height = "150px",
  backgroundImageSrc = undefined,
  aspectRatio = undefined,
  borderColor = "#ccc",
  borderRadius = "10px",
  ...props
}) => {
  const [isHovered, handlers] = useHover();

  return (
    <Provider
      value={{
        isHovered,
      }}
    >
      <article
        {...handlers}
        {...props}
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height,
          width,
          aspectRatio,
          borderColor,
          borderRadius,
          borderStyle: "solid",
          ...props.style,
        }}
      >
        {backgroundImageSrc && (
          <img
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              top: "0",
              left: "0",
              zIndex: "-1",
            }}
            src={backgroundImageSrc}
            alt= "background"
          />
        )}

        {children}
      </article>
    </Provider>
  );
};

AppCard.Header = Header;
AppCard.Body = Body;
AppCard.Footer = Footer;


export default AppCard;
