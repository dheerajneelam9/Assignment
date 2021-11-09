from collections import defaultdict
class Graph:
    def __init__(self):
        self.graph = defaultdict(list)
    def addEdge(self,start,end):
        self.graph[start].append(end)
    def DFS(self,node):
        visited = set()
        self.DFSUtil(node, visited)
    def DFSUtil(self,node,visited):
        visited.add(node)
        print(node, end=' ')
        for i in self.graph[node]:
            if i not in visited:
                self.DFSUtil(i,visited)

if __name__=='__main__':
    x = Graph()
    x.addEdge('A', 'B')
    x.addEdge('A', 'C')
    x.addEdge('B', 'C')
    x.addEdge('C', 'A')
    x.addEdge('C', 'D')
    x.addEdge('D', 'D')
    x.DFS('B')
