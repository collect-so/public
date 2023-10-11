import { useContext } from "react";
import { NavItem } from "./nav-item";
import { NavigationContext } from "~/components/Layout/header";
import { NavChevron } from "./nav-chevron";
import cx from "classnames";
import { IMenuItem } from "../data";
import { NavText } from "./nav-text";

export const MenuItem = ({ item }: { item: IMenuItem }) => {
  const {
    currentItem,
    openMenuItem,
    closeMenuItem,
    close,
    intersectDarkContainers,
  } = useContext(NavigationContext);
  const isCurrentMenuItemOpen = currentItem === item.name;

  const handleItemClick = () => {
    if (!item.children?.length) {
      closeMenuItem();
      close();
    } else {
      if (isCurrentMenuItemOpen) {
        closeMenuItem();
      }

      if (item.children?.length && !isCurrentMenuItemOpen) {
        openMenuItem(item.name);
      }
    }
  };

  return (
    <NavItem onClick={handleItemClick}>
      <a href={item.url}>
        <div
          className={cx("text-center w-full ", {
            "text-base-gray": isCurrentMenuItemOpen,
            "fill-base-gray": isCurrentMenuItemOpen,
          })}
        >
          <NavText className="md:py-[25px]">{item.name}</NavText>
          {item.children?.length ? (
            <NavChevron isOpen={isCurrentMenuItemOpen} />
          ) : null}
        </div>
      </a>
    </NavItem>
  );
};
