import json


while (1):
    with open('synonym.json', "r") as f:
        data = [[]]
        data = json.load(f)
        total = 0
        for i in data:
            total += len(i)
        print(f"loaded {total}")

        f.close()

    spl = ','
    print('Enter the text you want to add with ,')
    print('q to exit')
    print('ex: แมว,วิฬาร,วิฬาร์\n')
    inp = input('')
    if inp == 'q':
        break
    inp = inp.split(spl)
    group_idx = -1
    for x in inp:
        for idx, group in enumerate(data):
            if x in group:
                group_idx = idx
                break
        if group_idx != -1:
            break
    if group_idx == -1:
        group_idx = len(data)
        data.append([])

    for x in inp:
        if not x in data[group_idx]:
            data[group_idx].append(x)
            print(f'added {x}')

    with open('synonym.json', "w") as f:
        json_object = json.dumps(data, ensure_ascii=False)
        f.write(json_object)

        new_total = 0
        for i in data:
            new_total += len(i)
        print(f'saved {new_total}')
        f.close()


# arr = []
# for(let i= 0;i<document.getElementsByClassName("column-2")[0].children.length;i++){
#     arr.push(document.getElementsByClassName("column-2")[0].children[i].innerText);
# }
# console.log(arr.join(","))
# "แมว", "วิฬาร", "วิฬาร์"
