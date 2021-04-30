import {ref} from "vue";

export function useCompetitionList() {
    const list = ref([] as {}[])

    const getList = (pageSize: number, pageNumber: number) => {
        const tempList = [];
        for (let i = 0; i < pageSize; i++) {
            tempList.push({
                id: 0,
                title: 'Nekilc的比赛',
                href: 'content',
                description: '这个比赛呢，啥也没有，就是测试字符串长度足够长的时候，会不会隐藏文字，啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
                startTime: '2020-02-02',
                endTime: '2020-02-02',
                numberPeople: pageNumber,
                avatar: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
                finish: 0
            })
        }
        list.value = tempList
        return tempList
    }
    return {
        list: list,
        getList
    }
}
