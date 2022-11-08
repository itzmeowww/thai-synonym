import json

with open('synonym.json') as f:
    data = [[]]
    data = json.load(f)
    total = 0
    for i in data:
        total += len(i)
    print(f"loaded {total}")
    while (1):
        spl = ','
        inp = input('Enter the text you want to add with ,\n').split(spl)
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

        json_object = json.dumps(data, ensure_ascii=False)
        f.write(json_object)
        print('saved!')

# arr = []
# for(let i= 0;i<document.getElementsByClassName("column-2")[0].children.length;i++){
#     arr.push(document.getElementsByClassName("column-2")[0].children[i].innerText);
# }
# console.log(arr.join(","))
# ตรีเนตร,ท้าวพันตา,พันเนตร,มรุตวาน,มัฆวาน,วชิรปาณี,วชิราวุธ,วัชรินทร์,สหัสนัยน์
