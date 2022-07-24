import { ThemeProvider } from "styled-components";
import { Button } from "./components/Buttons";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Ignite Timer</h1>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />
    </ThemeProvider>
  );
}
