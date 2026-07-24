export const metadata = {
  title: "汇丰商学院飞跃手册",
  description: "由经济学会整理的非官方学生指南"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

