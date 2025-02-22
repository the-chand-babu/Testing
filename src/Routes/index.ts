export const routes = (app: any) => {
  app.get("/", (req: any, res: any) => {
    res.send("Hello World!");
  });
};
