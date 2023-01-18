import { Switch, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { HiSun, HiOutlineMoon } from "react-icons/hi";

const SwitchTheme = () => {
    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();
    return (
        <div
            style={{
                marginTop: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <HiSun size="18px" />

            <Switch
                style={{ marginLeft: "8px", marginRight: "8px" }}
                shadow
                color="primary"
                size="xs"
                checked={isDark}
                onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            />
            <HiOutlineMoon size="18px" />
        </div>
    );
};

export default SwitchTheme;
