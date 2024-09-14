在 PyCharm 中创建和管理 .py 文件的过程是很简单的。以下是你要求的几个 Python 程序示例，每个程序都有适当的注释，包括程序首行的姓名和学号：

1. 计算三个数的平均数

# 姓名: 简希
# 学号: 123456

# 输入三个数
num1 = float(input("请输入第一个数: "))
num2 = float(input("请输入第二个数: "))
num3 = float(input("请输入第三个数: "))

# 计算平均数
average = (num1 + num2 + num3) / 3

# 输出结果
print(f"三个数的平均数是: {average}")

2. 交换两个数的值

# 姓名: 简希
# 学号: 123456

# 输入两个数
a = float(input("请输入第一个数: "))
b = float(input("请输入第二个数: "))

# 交换两个数的值
a, b = b, a

# 输出结果
print(f"交换后的值: a = {a}, b = {b}")

3. 计算圆的面积和周长

# 姓名: 简希
# 学号: 123456

import math

# 输入圆的半径
radius = float(input("请输入圆的半径: "))

# 计算圆的面积和周长
area = math.pi * radius ** 2
circumference = 2 * math.pi * radius

# 输出结果
print(f"圆的面积是: {area}")
print(f"圆的周长是: {circumference}")

4. 输入名字和学号并用‘+’分隔输出

# 姓名: 简希
# 学号: 123456

# 输入名字和学号
name = input("请输入你的名字: ")
student_id = input("请输入你的学号: ")

# 输出结果
print(f"{name}+{student_id}")

5. 将自己喜欢的诗保存到 txt 文件中

# 姓名: 简希
# 学号: 123456

# 输入诗句
poem = input("请输入你喜欢的一首诗: ")

# 将诗句写入到 txt 文件中
with open("favorite_poem.txt", "w", encoding="utf-8") as file:
    file.write(poem)

print("诗句已保存到 'favorite_poem.txt'")

思考题：PyCharm 相对于 Editor 窗口的优点

1. 集成开发环境（IDE）：PyCharm 是一个完整的 IDE，提供了丰富的功能，如代码补全、调试工具、项目管理等，而 Editor 窗口通常是轻量级的文本编辑器，没有这些功能。


2. 智能代码补全：PyCharm 提供智能代码补全和提示，能够提高编码效率并减少错误。


3. 调试工具：PyCharm 内置了强大的调试工具，支持设置断点、查看变量值等，帮助开发者更方便地调试代码。


4. 版本控制：PyCharm 支持 Git、Subversion 等版本控制系统的集成，方便管理代码版本和团队协作。


5. 项目管理：PyCharm 提供了项目管理功能，支持项目结构管理、依赖管理等，有助于组织大型项目。


6. 测试支持：PyCharm 支持单元测试、功能测试的编写和执行，帮助提高代码的质量。



通过使用 PyCharm，你可以享受到更高效的开发体验和更丰富的功能支持。

