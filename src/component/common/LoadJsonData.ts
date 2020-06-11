const fetchCsv = (url: string) => {
    return fetch(url).then((response)=> {
        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');

        return reader.read().then((result) => {
            return decoder.decode(result.value);
        });
    });
}

const csvToJsonCoverter = (datas: string) => {
    const lines = datas.split("\n");
    const result = [];

    const headers = lines[0].split(",");

    for (let i = 1; i < lines.length; i++) {

        const obj: any = {};
        const currentline = lines[i].split(",");

        for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }

        result.push(obj);

    }

    return result;
}

const LoadJsonData = async (url: string) => {
    const csvData = await fetchCsv(url);

    return csvToJsonCoverter(csvData);
}
export default LoadJsonData;